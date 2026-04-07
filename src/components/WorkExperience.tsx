import { Stack } from "@/components/Stack"
import { Text } from "./Text"
import { Row } from "./Row"
import { ExternalLink } from "./Link"

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
              <ExternalLink
                title="Visit company website"
                href={job.companySiteUrl}
              >
                {job.location}
              </ExternalLink>
              <Text typed tag="time">
                ({job.from} - {job.to})
              </Text>
            </Row>
          </Row>
            <Stack tag="ul" direction="row" align="flex-start">
              {job.descriptions.map(d => (
                <Text
                  tag="li"
                  color="secondary"
                  variant="description"
                  sx={{ flex: 1, minWidth: "20%" }}
                  key={d}
                >
                  {d}
                </Text>
              ))}
            </Stack>
        </Stack>
      ))
      .reverse()}
  </Stack>
)
