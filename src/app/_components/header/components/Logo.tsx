import Link from 'next/link';
import Image from 'next/image';
export const Logo = () => {
  return (
    <Link href="/" className="inline-flex items-center gap-2 text-primary">
      <Image
        height={120}
        width={120}
        alt="miz code logo"
        src={'/images/logo.png'}
      />
    </Link>
  );
};
