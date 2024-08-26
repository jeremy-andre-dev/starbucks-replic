// import Link from "next/link";
import Image from "next/image";

// import { LatestPost } from "~/app/_components/post";
// import { getServerAuthSession } from "~/server/auth";
// import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  // void api.post.getLatest.prefetch();

  return (
    <main className="w-full max-w-[125rem]">
      <div className="flex h-screen max-h-[50rem] justify-center gap-10 py-16">
        {/* letters _____________________________*/}
        <div className="flex w-full max-w-[40rem] items-center justify-end">
          <div className="text-center text-7xl font-semibold">
            ¡Construye el lugar perfecto para tu gato!
          </div>
        </div>

        {/* Image _____________________________*/}
        <div className="flex w-full max-w-[40rem] items-center justify-start">
          <div
            style={{
              backgroundImage: "url('/casita.png')",
              backgroundSize: "cover", // Asegura que la imagen cubra todo el área
              backgroundPosition: "center", // Centra la imagen
              backgroundRepeat: "no-repeat", // Evita que la imagen se repita
              width: "500px", // Puedes ajustar el tamaño
              height: "500px", // Puedes ajustar el tamaño
            }}
          />
        </div>
      </div>
    </main>
  );
}
