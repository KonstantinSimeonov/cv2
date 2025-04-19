import { Stack } from "@/components/Stack"
import { PrintInvis } from "./PrintInvis"
import { Text } from "./Text"
import {Row} from "./Row"
import {ExternalLink} from "./Link"

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
<Text sx={{ textTransform: "uppercase" }} typed>
              {job.jobTitle}
            </Text>
            <Text>at</Text>
            <ExternalLink title="Visit company website" href={job.companySiteUrl}>{job.location}</ExternalLink>
            
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
