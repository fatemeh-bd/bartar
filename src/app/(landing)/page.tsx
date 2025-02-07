import UserLayout from './layout';

export default function page() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className=" pt-[50%]">درحال پخت و پز</div>
        <br></br>
        <a href="/learn" className="underline text-blue-500">
          آموزش
        </a>
      </div>
    </>
  );
}
