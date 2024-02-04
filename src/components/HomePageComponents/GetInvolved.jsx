import React from "react";

const GetInvolved = () => {
  return (
    <div className="bg-white px-28 py-12 flex flex-col">
      <div className="text-3xl font-semibold mb-8">Get Involved</div>

      <div className="flex gap-10  items-start w-full">
        {/* Volunteers Section */}

        {/* Students Section */}
        <div className="border shadow-md px-6 py-4 rounded-lg w-1/2">
          <h3 className="text-2xl font-semibold mb-3">Students</h3>
          <p>
            Register for our program and take your English language skills to
            the next level. Engage in meaningful conversations, learn about
            diverse cultures, and gain unique perspectives from our dedicated
            volunteers. Start your journey to becoming a proficient English
            speaker today!
          </p>
          <button className="mt-8 bg-primary-400 text-white text-md font-semibold px-6 py-3 rounded-md hover:bg-primary-500 transition-colors">
            Apply As a Student
          </button>
        </div>
        <div className="border shadow-md px-6 py-4 rounded-lg w-1/2">
          <h3 className="text-2xl font-semibold mb-3">Volunteers</h3>
          <p>
            Become a part of our growing community and help make a difference!
            As a volunteer, you'll get the chance to enhance your teaching
            skills, earn certificates, and accumulate volunteer hours. Join us
            in our mission to provide quality education to learners around the
            world.
          </p>
          <button className="mt-8 bg-primary-400 text-white text-md font-semibold px-6 py-3 rounded-md hover:bg-primary-500 transition-colors">
            Apply As a Volunteer
          </button>
        </div>
      </div>

      {/* Call to Action Button */}
    </div>
  );
};

export default GetInvolved;
