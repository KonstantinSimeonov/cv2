import { Stack } from "@/components/Stack"
import { PrintInvis } from "./PrintInvis"
import { Text } from "./Text"
import animation from "@/styles/animation.module.css"

export const WorkExperience: React.FC<{
  experience: readonly {
    from: string
    to: string
    jobTitle: string
    location: string
    descriptions: readonly string[]
  }[]
}> = ({ experience }) => (
  <Stack align="flex-start">
    {experience
      .map(job => (
        <Stack key={job.location} gap={0.5} align="flex-start">
          <Stack gap={0} align="flex-start">
            <Text typed tag="h3">
              {job.location}
            </Text>
            <Text typed tag="h4">
              {job.jobTitle}
            </Text>
            <Text typed tag="time">
              {job.from} - {job.to}
            </Text>
          </Stack>
          <PrintInvis>
            <Stack
              className={animation.fadeIn}
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
