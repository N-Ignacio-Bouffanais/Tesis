import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  console.log(providers)
  return (
    <section className="showcase">
      <div className="flex h-screen justify-center items-center">
        <div className="max-w-screen-sm bg-white p-5 border space-y-5 rounded-md w-4/12">
          <h2 className="font-bold text-4xl w-full text-center p-2 underline">
            Tesis de Nicolás
          </h2>
          <p className="text-center text-xl text-gray-600">
            Login con NextAuth
          </p>

          <button
            onClick={() => signIn(providers.id)}
            className="w-full border rounded p-3 text-white text-lg font-bold"
            style={{ background: "#a21caf" }}
          >
            Ingresar con {providers.github.name}
          </button>
          <button
            onClick={() => signIn(providers.id)}
            className="w-full border rounded p-3 text-white text-lg font-bold"
            style={{ background: "#ea580c" }}
          >
            Ingresar con {providers.google.name}
          </button>
          <button
            onClick={() => signIn(providers.id)}
            className="w-full border rounded p-3 text-white text-lg font-bold"
            style={{ background: "#2563eb" }}
          >
            Ingresar con {providers.facebook.name}
          </button>
        </div>
      </div>
      <div className="overlay text-white text-xl font-bold text-left pb-6 pl-6 content-end">
        <h1>
          Propiedad exclusiva de: <span className="text-green-500">"Nicolas Bouffanais Lay"</span>
        </h1>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
