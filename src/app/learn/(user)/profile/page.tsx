"use client";
import Teacher from "@/app/_components/courseBox/Teacher";
import ProfileTab from "@/app/_components/pages/profile/ProfileTab";
import RenderProfileContent from "@/app/_components/pages/profile/RenderProfileContent";
import React, { Suspense } from "react";

const ProfilePage = () => {
  return (
    <div className="grid grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-3 md:col-span-4 col-span-12 md:sticky top-24">
        <Teacher
          name="خوش آمدید"
          desc="جلال بهرامی راد"
          avatar="/images/avatar.jpeg"
        />
        <Suspense>
          <ProfileTab />
        </Suspense>
      </div>

      <div className="lg:col-span-9 md:col-span-8 col-span-12">
        <Suspense>
          <RenderProfileContent />
        </Suspense>
      </div>
    </div>
  );
};

export default ProfilePage;
