import { Stack } from "@/components/Stack";
import { Text } from "./Text";

export const WorkExperience: React.FC<{
  experience: readonly {
    from: string;
    to: string;
    jobTitle: string;
    location: string;
    descriptions: readonly string[];
  }[];
}> = ({ experience }) => (
  <Stack align="flex-start">
    {experience
      .map((job) => (
        <Stack key={job.location} gap={0.5} align="flex-start">
          <div>
            <Text tag="h4">
              {job.location} ({job.jobTitle})
            </Text>
            <Text tag="time">
              {job.from} - {job.to}
            </Text>
          </div>
          <Stack tag="ul" direction="row" align="flex-start">
            {job.descriptions.map((d) => (
              <Text tag="li" variant="description" sx={{ flex: 1 }} key={d}>
                {d}
              </Text>
            ))}
          </Stack>
        </Stack>
      ))
      .reverse()}
  </Stack>
);
