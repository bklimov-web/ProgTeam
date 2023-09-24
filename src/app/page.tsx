import HomePage from "components/HomePage/HomePage";

export default async function home() {
  return (
    <main data-auto="home" className="flex min-h-screen flex-col items-center">
      <HomePage />
    </main>
  );
}
