import { ElementType, useEffect } from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";

export default function withAuth(WrappedComponent: ElementType) {
  const Wrapper = (props: unknown) => {
    const [session] = useSession();
    const router = useRouter();

    useEffect(() => {
      if (!session) {
        router.push('/login');
      }
    }, [session]);

    return <WrappedComponent {...props} />;
  }

  return Wrapper;
}