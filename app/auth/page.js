import Footer from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';


export default function Page() {
  return (
    <>
      <div className="grid grid-rows-7 h-screen">
        <div className="mx-4 row-span-6 my-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Login</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-4">
                    <Input type="email" placeholder="Email"/>
                    <Input type="password" placeholder="Password"/>
                    <Button type="submit">Login</Button>
                    <GoogleOAuthProvider clientId="<your_client_id>">
                        <GoogleLogin/>
                    </GoogleOAuthProvider>
                </form>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </>
  );
}
