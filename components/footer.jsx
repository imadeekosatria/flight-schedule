import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getDownloadURL, ref } from "firebase/storage";
import bgFooter from "@/public/images/pexels-yurii-hlei.jpg";
import { db, storage } from "@/utils/firebase";
import Link from "next/link";
import Image from "next/image";

export default async function Footer() {
  const profile = await getDownloadURL(
    ref(ref(storage, "about"), "3 x 4.jpg")
  ).then((url) => {
    return url;
  });
  // console.log(profile)
  return (
    <>
      <div className="flex flex-col gap-y-4 w-screen h-fit mt-8 z-0">
        <div className="w-full relative">
          <div className="relative w-full h-96 aspect-video">
            <Image
              src={bgFooter}
              fill={true}
              className="object-cover w-screen brightness-50"
              alt="bg footer"
            />
          </div>
          <div className="absolute top-0 w-full grid grid-rows-6 h-full py-4">
            <div className="text-center flex flex-col justify-center text-slate-100 text-lg row-span-3">
              <Dialog>
                <DialogTrigger>
                  <Avatar className="mx-auto w-16 h-16">
                    <AvatarImage
                      src={profile}
                      className="object-cover brightness-75 hover:brightness-100"
                      alt="Eko"
                    />
                    <AvatarFallback>Profile</AvatarFallback>
                  </Avatar>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <Avatar className="mx-auto w-28 h-28">
                      <AvatarImage src={profile} className="object-cover" />
                      <AvatarFallback>Profile</AvatarFallback>
                    </Avatar>

                    <DialogDescription>
                      <div className="flex flex-col">
                        <span className="text-center">Created by</span>
                        <h2 className="text-center text-lg text-">
                          I Made Eko Satria Wiguna
                        </h2>
                      </div>

                      <hr className="my-4" />
                      <div className="flex mb-4 justify-center">
                        <span className="text-center">More about me</span>
                      </div>
                      <div className="flex justify-around">
                        <Link
                          href={"https://www.instagram.com/imadeekosatria/"}
                          target="_blank"
                          aria-label="Go to my instagram"
                        >
                          <box-icon
                            name="instagram"
                            type="logo"
                            color="#7088f1"
                            size="lg"
                            animation="tada-hover"
                          ></box-icon>
                        </Link>
                        <Link
                          href={
                            "https://www.linkedin.com/in/i-made-eko-satria-wiguna/"
                          }
                          target="_blank"
                          aria-label="Go to my linkedin"
                        >
                          <box-icon
                            name="linkedin-square"
                            type="logo"
                            color="#7088f1"
                            size="lg"
                            animation="tada-hover"
                          ></box-icon>
                        </Link>
                        <Link
                          href={"https://github.com/imadeekosatria"}
                          target="_blank"
                          aria-label="Go to my github"
                        >
                          <box-icon
                            name="github"
                            type="logo"
                            color="#7088f1"
                            size="lg"
                            animation="tada-hover"
                          ></box-icon>
                        </Link>
                        <Link
                          href={"mailto:imadeekosatria@gmail.com"}
                          target="_blank"
                          aria-label="Mailto:imadeekosatria"
                        >
                          <box-icon
                            name="envelope"
                            color="#7088f1"
                            size="lg"
                            animation="tada-hover"
                          ></box-icon>
                        </Link>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <h3 className="text-2xl font-semibold">Life is journey</h3>
              <span className="text-base">
                Enjoy the progress and be strong
              </span>
            </div>
            <div className="w-full flex justify-around md:mx-auto md:items-center md:justify-center md:gap-x-5 items-center">
              <Link
                href={"https://www.instagram.com/imadeekosatria/"}
                target="_blank"
              >
                <box-icon
                  name="instagram"
                  type="logo"
                  color="#ECECEC"
                  size="lg"
                  animation="tada-hover"
                ></box-icon>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/i-made-eko-satria-wiguna/"}
                target="_blank"
              >
                <box-icon
                  name="linkedin-square"
                  type="logo"
                  color="#ECECEC"
                  size="lg"
                  animation="tada-hover"
                ></box-icon>
              </Link>
              <Link href={"https://github.com/imadeekosatria"} target="_blank">
                <box-icon
                  name="github"
                  type="logo"
                  color="#ECECEC"
                  size="lg"
                  animation="tada-hover"
                ></box-icon>
              </Link>
              <Link href={"mailto:imadeekosatria@gmail.com"} target="_blank">
                <box-icon
                  name="envelope"
                  color="#ECECEC"
                  size="lg"
                  animation="tada-hover"
                ></box-icon>
              </Link>
            </div>
            <div className="text-slate-300 text-center  flex flex-col gap-y-2 row-span-2 justify-center">
              <span>
                All airline logos and data are derived from associated airports
                data
              </span>
              <span>&copy; 2023</span>
            </div>
            <Link
              href={
                "https://www.pexels.com/id-id/foto/daun-hijau-ovate-1591676/"
              }
              className="absolute px-5 py-3 bottom-0 left-0 text-slate-800 text-sm  backdrop-blur-sm rounded-md"
            >
              Picture by Yurii Hlei
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
