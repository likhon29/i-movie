import { redirect } from "next/navigation";

interface HomePageProps {}

/**
 * This is will be the home page of the application
 * Right now it'll show or redirect to the login page
 * It can be replaced with a proper landing page
 */

const HomePage = ({}: Readonly<HomePageProps>) => {
  redirect("/dashboard");
};

HomePage.displayName = "HomePage";

export default HomePage;
