import UserLayout from './layout';

export default function page() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center gap-4 items-center">
          <span className=" pt-[50%]">درحال پخت و پز</span>
          <a href="/learn" className="underline text-blue-500">
            ورود به آموزش
          </a>
        </div>
      </div>
    </>
  );
}
