import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  return (
    <nav className="flex justify-between bg-green-500 p-4  ">
      <h2 className="text-xl text-center">TodoApp</h2>

      <div className="flex flex-row">
        <UserAvatar />
      </div>
    </nav>
  );
}
function UserAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
