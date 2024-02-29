import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const NavbarAuth = () => {
    return (
        <>
            <SignedIn>
                <UserButton
                    appearance={{
                        elements: {
                            userButtonAvatarBox: "h-10 w-10"
                        }
                    }}
                />
            </SignedIn>
            <SignedOut>
                <SignInButton>
                    <button className="text-lg text-white font-bold bg-blue-700 hover:bg-blue-800 active:hover:bg-blue-900 py-2 px-4 rounded-full">
                        Sign in
                    </button>
                </SignInButton>
            </SignedOut>
        </>
    );
};

export default NavbarAuth;