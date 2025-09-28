import { Text } from "../Text/Text";

export default function Footer() {
    return (
        <div className="items-center justify-center bg-secondary text-center p-4 text-white">
            <Text variant="body">
                &copy; 2025 MakeMed. All rights reserved.
            </Text>
            <Text variant="body">
                Developed by Nathan Liou and Alejandro Imperial.
            </Text>
        </div>
    );
};