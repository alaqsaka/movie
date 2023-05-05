import Authenticated from "@/Layouts/Authenticated/Index";
import React from "react";
import SubscriptionCard from "@/Components/SubscriptionCard";

const SubscriptionPlan = () => {
    return (
        <Authenticated>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* <!-- START: Content --> */}
                <div>
                    <div className="py-20 flex flex-col items-center">
                        <div className="text-black font-semibold text-[26px] mb-3">
                            Pricing for Everyone
                        </div>
                        <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                            Invest your little money to get a whole new
                            experiences from movies.
                        </p>

                        {/* <!-- Pricing Card --> */}
                        <div className="flex justify-center gap-10 mt-[70px]">
                            <SubscriptionCard
                                name="Basic"
                                price={299999}
                                durationInMonth={3}
                                features={[
                                    "Feature 1",
                                    "Feature 2",
                                    "Feature 3",
                                ]}
                            />
                            <SubscriptionCard
                                isPremium
                                name="Premium"
                                price={999999}
                                durationInMonth={3}
                                features={[
                                    "Feature 1",
                                    "Feature 2",
                                    "Feature 3",
                                    "Feature 4",
                                    "Feature 5",
                                    "Feature 6",
                                ]}
                            />
                        </div>
                        {/* <!-- /Pricing Card --> */}
                    </div>
                </div>
                {/* <!-- END: Content --> */}
            </div>
        </Authenticated>
    );
};

export default SubscriptionPlan;
