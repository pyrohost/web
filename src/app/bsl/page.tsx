/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Source License 1.1",
  description: "pyro - Business Source License 1.1",
  openGraph: {
    title: "Business Source License 1.1",
    description: "pyro - Business Source License 1.1",
    images: [
      {
        url: "./ogimage.png",
      },
    ],
  },
};

const Page = () => {
  return (
    <main className="relative h-full w-full">
      <section className="relative h-full w-full px-16">
        <div className="mx-auto flex w-full max-w-[1620px] flex-col">
          <div className="z-10 mx-auto flex w-full max-w-[78ch] flex-col pt-60">
            <h1 className="mt-4 text-[60px] font-extrabold leading-[98%] tracking-[-0.22rem] md:text-[84px] md:tracking-[-0.3rem]">
              Business Source License
            </h1>
            <div className="mt-8 flex flex-col text-xl">
              <strong>
                License text copyright (c) 2020 MariaDB Corporation Ab, All
                Rights Reserved.
                <br />
                “Business Source License” is a trademark of MariaDB Corporation
                Ab.
              </strong>
            </div>
            <article className="mt-6">
              <table className="my-6 w-full rounded-xl bg-[#ffffff22]">
                <tbody>
                  <tr className="border-b-2 border-b-[#ffffff22]">
                    <td className="min-w-[128px] p-4 align-top">Licensor</td>
                    <td className="w-full p-4">Pyro Inc.</td>
                  </tr>
                  <tr className="border-b-2 border-b-[#ffffff22]">
                    <td className="min-w-[128px] p-4 align-top">
                      Licensed Work
                    </td>
                    <td className="w-full p-4">
                      The Licensed Work is (c) 2024 Pyro Inc.
                    </td>
                  </tr>
                  <tr className="border-b-2 border-b-[#ffffff22]">
                    <td className="min-w-[128px] p-4 align-top">
                      Additional Use Grant
                    </td>
                    <td className="w-full p-4">
                      You may make production use of the Licensed Work, provided
                      Your use does not include offering the Licensed Work to
                      third parties on a hosted or embedded basis in order to
                      compete with Pyro’s paid version(s) of the Licensed Work.
                      For purposes of this license:
                      <br />
                      <br />A “competitive offering” is a Product that is
                      offered to third parties on a paid basis, including
                      through paid support arrangements, that significantly
                      overlaps with the capabilities of Pyro’s paid version(s)
                      of the Licensed Work. If Your Product is not a competitive
                      offering when You first make it generally available, it
                      will not become a competitive offering later due to Pyro
                      releasing a new version of the Licensed Work with
                      additional capabilities. In addition, Products that are
                      not provided on a paid basis are not competitive.
                      <br />
                      <br />
                      “Product” means software that is offered to end users to
                      manage in their own environments or offered as a service
                      on a hosted basis.
                      <br />
                      <br />
                      “Embedded” means including the source code or executable
                      code from the Licensed Work in a competitive offering.
                      “Embedded” also means packaging the competitive offering
                      in such a way that the Licensed Work must be accessed or
                      downloaded for the competitive offering to operate.
                      <br />
                      <br />
                      Hosting or using the Licensed Work(s) for internal
                      purposes within an organization is not considered a
                      competitive offering. Pyro considers your organization to
                      include all of your affiliates under common control.
                    </td>
                  </tr>
                  <tr className="border-b-2 border-b-[#ffffff22]">
                    <td className="min-w-[128px] p-4 align-top">Change Date</td>
                    <td className="w-full p-4">
                      Four years from the date the Licensed Work is published
                    </td>
                  </tr>
                  <tr>
                    <td className="min-w-[128px] p-4 align-top">
                      Change License
                    </td>
                    <td className="w-full p-4">MPL 2.0</td>
                  </tr>
                </tbody>
              </table>
              <strong>Terms</strong>
              <p className="mb-6">
                The Licensor hereby grants you the right to copy, modify, create
                derivative works, redistribute, and make non-production use of
                the Licensed Work. The Licensor may make an Additional Use
                Grant, above, permitting limited production use.
              </p>
              <p className="mb-6">
                Effective on the Change Date, or the fourth anniversary of the
                first publicly available distribution of a specific version of
                the Licensed Work under this License, whichever comes first, the
                Licensor hereby grants you rights under the terms of the Change
                License, and the rights granted in the paragraph above
                terminate.
              </p>
              <p className="mb-6">
                If your use of the Licensed Work does not comply with the
                requirements currently in effect as described in this License,
                you must purchase a commercial license from the Licensor, its
                affiliated entities, or authorized resellers, or you must
                refrain from using the Licensed Work.
              </p>
              <p className="mb-6">
                All copies of the original and modified Licensed Work, and
                derivative works of the Licensed Work, are subject to this
                License. This License applies separately for each version of the
                Licensed Work and the Change Date may vary for each version of
                the Licensed Work released by Licensor.
              </p>
              <p className="mb-6">
                You must conspicuously display this License on each original or
                modified copy of the Licensed Work. If you receive the Licensed
                Work in original or modified form from a third party, the terms
                and conditions set forth in this License apply to your use of
                that work.
              </p>
              <p className="mb-6">
                Any use of the Licensed Work in violation of this License will
                automatically terminate your rights under this License for the
                current and all other versions of the Licensed Work.
              </p>
              <p className="mb-6">
                This License does not grant you any right in any trademark or
                logo of Licensor or its affiliates (provided that you may use a
                trademark or logo of Licensor as expressly required by this
                License).
              </p>
              <p className="mb-6">
                TO THE EXTENT PERMITTED BY APPLICABLE LAW, THE LICENSED WORK IS
                PROVIDED ON AN “AS IS” BASIS. LICENSOR HEREBY DISCLAIMS ALL
                WARRANTIES AND CONDITIONS, EXPRESS OR IMPLIED, INCLUDING
                (WITHOUT LIMITATION) WARRANTIES OF MERCHANTABILITY, FITNESS FOR
                A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
