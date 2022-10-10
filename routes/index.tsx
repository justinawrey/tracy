import ThemePicker from "../islands/theme-picker.tsx";

export default function Home() {
  return (
    <>
      <p class="text-gray-800 bg-white dark:(text-white bg-gray-800)">
        Hello, Fresh!
      </p>
      <ThemePicker />
    </>
  );
}
