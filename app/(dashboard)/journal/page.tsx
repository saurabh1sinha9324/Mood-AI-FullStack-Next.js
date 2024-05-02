import EntryCard from "@/components/EntryCard"
import NewEntryCard from "@/components/NewEntryCard"
import Question from "@/components/Questions"
import { analyze } from "@/utils/ai"
import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import Link from "next/link"


const getEnteries = async () => {
    const user = await getUserByClerkID()
    const entries = await prisma.journalEntry.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            createdAt: 'desc',
        },
        include: {
            analysis: true,
          },
        
    })

    // console.log (await analyze('today I was playingg super mario and beat my previous record and posted my new score on speedrun.com'))

    return entries
}

const JournalPage = async () => {
    const enteries = await getEnteries()
        return (
            
            <div className="px-6 py-8 bg-zinc-200/50 ">
                <h1 className="text-4xl mb-12">Journals</h1>
                <div className=" my-8">
                    <Question />
                </div>
                <div className='grid grid-cols-3 gap-4 p-10'>
                    <NewEntryCard />
                    {enteries.map((entry) => (
                    <Link href={`/journal/${entry.id}`}>
                        <EntryCard  entry={entry} />
                    </Link>
                    ))}
                </div>
            </div>
        )
    
}
export default JournalPage