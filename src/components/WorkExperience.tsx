import { Stack } from "@/components/Stack"
import { PrintInvis } from "./PrintInvis"
import { Text } from "./Text"
import {Row} from "./Row"

export const WorkExperience: React.FC<{
  experience: readonly {
    from: string
    to: string
    jobTitle: string
    location: string
    companySiteUrl: string
    descriptions: readonly string[]
  }[]
}> = ({ experience }) => (
  <Stack align="flex-start">
    {experience
      .map(job => (
        <Stack key={job.location} gap={0.5}>
          <Row gap={1} justify="space-between">
            <Row gap={0.5}>
            <Text sx={{ fontStyle: `italic` }} typed tag="h3">
              <a style={{ color: `var(--primary-color)` }} target="_blank" rel="noreferrer" href={job.companySiteUrl}>
                {job.location}
              </a>
            </Text>
            <Text sx={{ fontStyle: `italic` }} typed tag="h4">
              ({job.jobTitle})
            </Text>
</Row>
            <Text typed tag="time">
              {job.from} - {job.to}
            </Text>
          </Row>
          <PrintInvis>
            <Stack
              tag="ul"
              direction="row"
              align="flex-start"
            >
              {job.descriptions.map(d => (
                <Text
                  tag="li"
                  color="secondary"
                  variant="description"
                  sx={{ flex: 1 }}
                  key={d}
                >
                  {d}
                </Text>
              ))}
            </Stack>
          </PrintInvis>
        </Stack>
      ))
      .reverse()}
  </Stack>
)
