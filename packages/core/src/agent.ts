import { MemoryCache } from "./cache"
import { AGENT_MEMORY_CACHE_NAME } from "./constants"
import { errorMessage } from "./error"
import { MarkdownTrace } from "./trace"
import { logVerbose } from "./util"

export async function agentQueryMemory(
    ctx: ChatGenerationContext,
    query: string
) {
    if (!query) return undefined

    let memoryAnswer: string | undefined
    // always pre-query memory with cheap model
    const res = await ctx.runPrompt(
        async (_) => {
            _.$`Answer QUERY with a summary of the information from MEMORY.
                                - If you are missing information, return <NO_INFORMATION>.
                                - Use QUERY as the only source of information.
                                - Be concise. Keep it short. The output is used by another LLM.
                                - Provide important details like identifiers and names.
                                `
            _.def("QUERY", query)
            await defMemory(_)
        },
        {
            model: "small",
            system: ["system"],
            flexTokens: 20000,
            label: "agent memory query",
        }
    )
    if (!res.error) memoryAnswer = res.text
    else logVerbose(`agent memory query error: ${errorMessage(res.error)}`)
    return memoryAnswer
}

export async function agentAddMemory(
    agent: string,
    query: string,
    text: string,
    trace: MarkdownTrace
) {
    const cache = MemoryCache.byName<
        { agent: string; query: string },
        {
            agent: string
            query: string
            answer: string
        }
    >(AGENT_MEMORY_CACHE_NAME)
    const cacheKey = { agent, query }
    const cachedValue = {
        ...cacheKey,
        answer: text,
    }
    await cache.set(cacheKey, cachedValue)
    trace.detailsFenced(
        `🧠 agent memory: ${query}`,
        cachedValue.answer,
        "markdown"
    )
}

export async function traceAgentMemory(trace: MarkdownTrace) {
    const cache = MemoryCache.byName<
        { agent: string; query: string },
        {
            agent: string
            query: string
            answer: string
        }
    >(AGENT_MEMORY_CACHE_NAME, { lookupOnly: true })
    if (cache) {
        const memories = await cache.values()
        try {
            trace.startDetails("🧠 agent memory")
            memories
                .reverse()
                .forEach(({ agent, query, answer }) =>
                    trace.detailsFenced(
                        `👤 ${agent}: \`${query}\``,
                        answer,
                        "markdown"
                    )
                )
        } finally {
            trace.endDetails()
        }
    }
}

export async function defMemory(ctx: ChatTurnGenerationContext) {
    const cache = MemoryCache.byName<
        { agent: string; query: string },
        {
            agent: string
            query: string
            answer: string
        }
    >(AGENT_MEMORY_CACHE_NAME)
    const memories = await cache.values()
    memories.reverse().forEach(
        ({ agent, query, answer }) =>
            ctx.def(
                "MEMORY",
                `${agent}> ${query}?
            ${answer}
            `
            ),
        {
            flex: 1,
        }
    )
}
