import reactImg from "../Images/titelbild.png";

export default function Header() {
  return (
    <header>
      <br></br>
      <img
        src={reactImg}
        alt="fitness-Startbild"
        className="h-72 justify-center text-center mx-auto mt-5 "
      />
    </header>
  );
}
