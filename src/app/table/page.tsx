import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      submitTime: new Date("2023-01-01T00:00:00Z"),
      endTime: new Date("2023-01-01T00:00:00Z"),
      ifIncludedCouple: true,
      ifTogether:true,
      major:'食品',
      educationLevel:'博士',
      educationType:'其他',
      submitPlace:'境外',
      ifDIY:true,
      infoFrom:'自己'
    },
    // ...
  ]
}

export default async function TablePage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

