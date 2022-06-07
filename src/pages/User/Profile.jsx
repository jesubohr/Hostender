import { useAuth } from "@util/authUser";
import { useLocal } from "@util/hooks";

import { HistoryItem } from "@block/item";
import { Button } from "@block/button";
import Section from "@block/Section";
import Title from "@block/Title";

export default function Profile () {
    const { user } = useAuth();
    const [usersHistory, setUsersHistory] = useLocal("usersHistory", []);

    const userHistory = usersHistory.find(item => item.owner === user.id);
    return (
        <Section className="flex flex-col">
            <Title>{ user.fullname }</Title>
            <p className="-mt-10 mb-10 text-gray text-lg italic">@{ user.username }</p>
            <div className="self-center w-full">
                {
                    userHistory
                        ? <>
                            {
                                userHistory.history.map((item, index) => (
                                    <HistoryItem key={ index } item={ item } />
                                ))
                            }
                        </>
                        : <>
                            <p className="mt-12 text-center text-3xl">You have no history! ☹</p>
                            <Button className="w-full mt-8">Go Shop!</Button>
                        </>
                }
            </div>
        </Section>
    );
}
