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

import { db, storage } from "@/utils/firebase";
import Link from "next/link";

export default async function Footer() {
  const profile = await getDownloadURL(
    ref(ref(storage, "about"), "3 x 4.JPG")
  ).then((url) => {
    return url;
  });
  // console.log(profile)
  return (
    <>
      <div className="flex flex-col gap-y-2 text-center justify-end text-black text-xs font-normal mx-auto">
        <Dialog>
          <DialogTrigger>
            <h3 className="hover:text-[#7088F1] text-md capitalize hover:scale-125 font-semibold">
              I Made Eko Satria Wiguna
            </h3>
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

        <span>2023</span>
      </div>
    </>
  );
}
