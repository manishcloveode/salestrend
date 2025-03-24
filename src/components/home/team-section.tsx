import { MoveRight } from 'lucide-react';

const TeamSection = () => {
    const teamMembers = [
        {
            name: "Mark Zellers",
            position: "Founder & CEO",
            imageSrc: "/Home/team-01.jpg"
        },
        {
            name: "John Zellers",
            position: "Co-Founder",
            imageSrc: "/Home/team-02.jpg"
        },
        {
            name: "Kim Yun Son",
            position: "Engineering Manager",
            imageSrc: "/Home/team-03.jpg"
        },
        {
            name: "André Garcia",
            position: "Product Manager",
            imageSrc: "/Home/team-04.jpg"
        },
        {
            name: "Peter Lary",
            position: "UX Researcher",
            imageSrc: "/Home/team-05.jpg"
        },
        {
            name: "Henry Matt",
            position: "Customer Success",
            imageSrc: "/Home/team-06.jpg"
        },
        {
            name: "Natalia",
            position: "Lead of fun",
            imageSrc: "/Home/team-07.jpg"
        },
        {
            name: "Larry",
            position: "Director of Joy",
            imageSrc: "/Home/team-08.jpg"
        }
    ];

    return (
        <section className="py-16 container mx-auto px-4">
            <div className="text-center mb-12">
                <p className="text-emerald-600 font-medium mb-2">We're hiring</p>
                <h2 className="text-5xl font-bold mb-6">Meet our team</h2>
                <p className="max-w-3xl mx-auto text-gray-600 text-lg">
                    Our philosophy is simple — hire a team of diverse, passionate people and foster a
                    culture that empowers you to do your best work.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-24 h-24 mb-4 rounded-full  overflow-hidden border border-black">
                            <img
                                src={member.imageSrc || "/api/placeholder/200/200"}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-gray-500">{member.position}</p>
                    </div>
                ))}
            </div>
            <div className="my-16">
                <p className="text-center font-bold">
                    <a href="your-link-here" className="text-emerald-600 hover:underline">
                        We're hiring
                    </a>
                    <MoveRight className="inline ml-2 text-emerald-600" />
                </p>
            </div>

        </section>
    );
};

export default TeamSection;