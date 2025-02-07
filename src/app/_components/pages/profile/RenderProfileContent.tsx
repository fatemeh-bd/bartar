import { ProfileItem } from "@/utils/enums";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import Dashboard from "./dashboard/Dashboard";
import MyCourses from "./myCourses/MyCourses";
import Favorites from "./favorites/Favorites";
import Notifications from "./notifications/Notifications";
import EditProfile from "./edit/EditProfile";

const RenderProfileContent = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const router = useRouter();

  useEffect(() => {
    if (page === null) {
      router.replace(`/profile?page=${ProfileItem.DASHBOARD}`);
    }
  }, [page, router]);

  const renderContent = () => {
    switch (page) {
      case ProfileItem.DASHBOARD:
        return <Dashboard />;
      case ProfileItem.COURSES:
        return <MyCourses />;
      case ProfileItem.FAVORITE:
        return <Favorites />;
      case ProfileItem.NOTIFICATIONS:
        return <Notifications />;
      case ProfileItem.PROFILE_EDIT:
        return <EditProfile />;
      default:
        return notFound();
    }
  };

  if (page === null) return null;

  return renderContent();
};

export default RenderProfileContent;
