import { Container } from "@/components/container";
import Landing from "@/components/landing";

export default function Home() {
  return (
    <Container className="flex items-center justify-center flex-col gap-4 ">
      <Landing />
    </Container>
  );
}
