// components/curriculum-overview-section.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface CurriculumItem {
  week: number
  topic: string
}

export function CurriculumOverviewSection({ curriculumOverview }: { curriculumOverview: CurriculumItem[] }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Curriculum Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Week</TableHead>
                  <TableHead>Topic</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {curriculumOverview.map((item) => (
                  <TableRow key={item.week}>
                    <TableCell>{item.week}</TableCell>
                    <TableCell>{item.topic}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}