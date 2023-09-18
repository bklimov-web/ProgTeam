import BlocksList from "components/BlocksList";

export default function Home() {
  return (
    <main
      data-auto="home"
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <BlocksList />
    </main>
  );
}
