"use client";
import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { data: accounts, isLoading } = useGetAccounts();
  const { onOpen } = useNewAccount();

  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <Button onClick={onOpen}>Add an account</Button>
      {accounts?.map((account) => (
        <div key={account.id}>{account.name}</div>
      ))}
    </div>
  );
}
