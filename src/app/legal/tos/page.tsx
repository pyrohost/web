/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Pyro - Terms of Service',
    description: "Read about Pyro's Terms of Service.",
    openGraph: {
        title: 'Pyro - Terms of Service',
        description: "Read about Pyro's Terms of Service.",
        images: [
            {
                url: './ogimage.png',
            },
        ],
    },
};

const Page = () => {
    return (
        <div className='flex flex-1 flex-col overflow-x-clip xl:px-1 xl:pb-1'>
            <div className='relative z-10 min-h-[calc(100vh-76px)] w-full overflow-clip rounded-3xl'>
                <div className='mx-auto flex w-full max-w-[1620px] flex-col'>
                    <div className='z-10 mx-auto flex w-full max-w-[73ch] flex-col px-6 py-16 lg:px-12 lg:py-60'>
                        <h1 className='mt-4 text-[60px] font-extrabold leading-[98%] tracking-[-0.22rem] md:text-[84px] md:tracking-[-0.3rem]'>
                            Pyro's Terms of Service
                        </h1>
                        <div className='mt-8 flex flex-col text-xl'>
                            <strong>Last Updated: February 8, 2024</strong>
                            <strong>Effective: February 15, 2024</strong>
                        </div>
                        <article className='mt-8 flex flex-col gap-4 leading-[155%]'>
                            <div>
                                These Terms of Service (this "Agreement") are entered into by and between Pyro Host Inc.
                                ("Pyro", "we", or "us") and you, who is either (a) an individual user of the Services,
                                or (b) an individual acting on behalf of a legal entity that is a user of the Services
                                (as defined below). This Agreement governs your use of the Services and constitutes a
                                legally binding agreement between you and Pyro. If you are using the Services on behalf
                                of a legal entity, you represent that you are authorized to enter into this Agreement on
                                behalf of that legal entity. If you are using the Services on behalf of a legal entity,
                                "you" refers to that entity.
                            </div>
                            <div>
                                PLEASE READ THIS AGREEMENT CAREFULLY. THIS IS A LEGALLY BINDING AGREEMENT BETWEEN YOU
                                AND PYRO. BY SUBSCRIBING TO, ACCESSING OR USING THE SERVICES, YOU CONFIRM THAT (1) YOU
                                HAVE READ THIS AGREEMENT, (2) YOU ACCEPT THE TERMS OF THIS AGREEMENT, AND (3) YOU READ,
                                UNDERSTOOD AND ACCEPT OUR PRIVACY POLICY AVAILABLE AT{' '}
                                <Link href='/legal/privacy' className='underline'>
                                    https://pyro.host/legal/privacy
                                </Link>
                                .
                            </div>
                            <div>
                                IF YOU DO NOT ACCEPT THIS AGREEMENT, DO NOT REGISTER FOR OR USE THE SERVICES NOR CLICK
                                "I ACCEPT" OR "AGREE" TO THIS AGREEMENT. IF YOU DO NOT AGREE TO THIS AGREEMENT, YOU MAY
                                NOT USE THE SERVICES.
                            </div>
                            <div>
                                Pyro may modify this Agreement from time to time, in which case we will post a new
                                version on this site pyro.host ("Site"), and update the "Last Updated" and "Effective"
                                dates above, and changes to this Agreement are effective according to the "Effective"
                                date. Your continued use of the Services following posting of any changes consitutes
                                your acceptance of such changes, and if do not agree with the changes, you must
                                immediately stop using the Services. Pyro may change or discontinue all or any aspect of
                                the Services at any time, with or without notice, and without liability to you, in our
                                sole discretion.
                            </div>
                            <div>
                                <strong>1. Description of our Services.</strong> Pyro provides game hosting services,
                                virtual private servers, and other related services (collectively, the "Services").
                            </div>
                            <br></br>
                            <strong>2. Definitions</strong>
                            <div>
                                <strong>"Applicable Laws"</strong> means all laws, ordinances, rules, regulations,
                                orders, licenses, permits, judgments, decisions, and other requirements of any
                                governmental authority in any jurisdiction over the Services or the parties to this
                                Agreement, whether those laws are now in effect or later come into effect during the
                                term of this Agreement.
                                <br></br>
                                <br></br>‍<strong>“Subscription Period”</strong> means the term of your subscription to
                                the Services.
                            </div>
                            <br></br>
                            <strong>3. Scope of Rights and Restrictions</strong>
                            <div>
                                <strong>3.1. Services.</strong> Pyro hereby grants you the revocable, non-exclusive,
                                limited, non-transferable right to access and use the Services solely in strict
                                accordance with this Agreement.
                            </div>
                            <div>
                                <strong>3.2. Alpha.</strong> You acknowledge and agree that Pyro is providing the
                                Services hereunder as an "alpha" release, and that the Services may contain bugs,
                                errors, and other issues. You acknowledge and agree that the Services may not be
                                complete and may contain errors or inaccuracies that could cause failures, corruption,
                                or loss of data and/or information. You acknowledge that the Services are being provided
                                on an "AS IS" and "AS AVAILABLE" basis, and that Pyro does not warrant that the Services
                                will be uninterrupted or error-free, unless otherwise guaranteed by a Service Level
                                Agreement. You acknowledge and agree that the use of the Services may result in
                                unexpected results, loss of data, delays, or other unpredictable damage or loss to you
                                or others. You acknowledge and agree that Pyro is not responsible for any such damage or
                                loss.
                            </div>
                            <div>
                                <strong>3.3. Restrictions.</strong> You agree not to, and not to allow others to use,
                                the Services in any manner outside of the scope of the rights granted to you under this
                                Agreement. Without limiting the foregoing, you expressly agree not to do the following
                                with respect to the Services: (i) reverse engineer, decompile, disassemble, re-engineer
                                or otherwise create or attempt to create or permit, allow, or assist others to create
                                the source code of the Services or its structural framework, (ii) sublicense,
                                subcontract, translate or sell any rights to the Services, (iii) use any robot, spider,
                                site search or retrieval mechanism or other manual or automatic device or process to
                                retrieve, index, data mine, or in any way reproduce or circumvent the navigational
                                structure or presentation of the Services, (iv) harvest or collect information about or
                                from other users of the Services (v) probe, scan or test the vulnerability of the
                                Services, nor breach the security or authentication measures on the Services or take any
                                action that imposes an unreasonable or disproportionately large load on the
                                infrastructure of the Services (vi) modify or create derivative works of the Services,
                                (vii) attempt to gain unauthorized access to the Services or its related systems or
                                networks, (viii) use the Services in whole or in part for any illegal or other purpose
                                except as expressly provided under this Agreement, (ix) collect or uploaded any
                                personally identifiable information from or to the Services, except as authorized by the
                                relevant subject, or (x) facilitate or encourage any violations of this Section 3.3. You
                                further expressly agree (a) to take all reasonable precautions to prevent unauthorized
                                or improper use of the Services, (b) to not interfere with or disrupt the integrity or
                                performance of the Services, (c) to not attempt to gain unauthorized access to the
                                Services or its related systems or networks, (d) to not create Internet “links” to the
                                Services or “frame” or “mirror” any content therein; (e) that your access to the
                                Services will not be used in connection with the development of any product or service
                                that is in competition with the services provided by the Services, nor will you assist
                                or facilitate any third party in any such use.
                            </div>
                            <div>
                                <strong>3.4. Third Party Services.</strong> Certain features and functionalities within
                                the Services as we determine in our sole discretion may include or otherwise also allow
                                you and other holders to interact with, access and/or use compatible third-party
                                services, products, data, technology, websites and content (collectively, “Third Party
                                Services”) through the Services. You agree that Pyro does not provide any aspect of the
                                Third Party Services and is not responsible for the accuracy of such Third Party
                                Services nor any compatibility issues, errors or bugs in the Services or Third Party
                                Services caused in whole or in part by the Third Party Services or any update or upgrade
                                thereto.
                            </div>
                            <div>
                                <strong>3.5. Reservation of Rights.</strong> All rights not expressly granted to you
                                herein are expressly reserved by Pyro. Pyro will retain ownership of the Services,
                                including without limitation, all related software, hardware, products, processes,
                                algorithms, user interfaces, know-how, techniques, designs and other tangible or
                                intangible technical material or information, and all copyrights, patents, trademarks,
                                trade secrets, know-how, databases, and other intellectual property rights (whether
                                registered or unregistered) relating to or embodied in the Services and any updates,
                                improvements, modifications or enhancements (including error corrections) thereto, and
                                all derivative works thereof. You will have no right, title, or interest in or to the
                                same except the rights expressly granted to you in Section 3.1. Nothing in this
                                Agreement will be deemed to grant, by implication, estoppel, or otherwise, a license
                                under any of Pyro’s or its licensors’ existing or future rights in or to the Services
                                except as expressly granted in Section 3.1. Pyro trade names, trademarks, service marks,
                                titles, and logos, and any goodwill appurtenant thereto, shall be owned exclusively by
                                Pyro and shall inure solely to the benefit of Pyro.
                            </div>
                            <div>
                                <strong>3.6. Equipment.</strong> As between Pyro and you, you are responsible for
                                obtaining and maintaining all computer hardware, software, communications and equipment
                                needed to access and use the Services, and for paying any associated third-party
                                expenses.
                            </div>
                            <div>
                                <strong>4. Suspension.</strong> You agree and acknowledge that Pyro may immediately
                                suspend your access to the Services at any time, without notice and without liability
                                (i) if Pyro suspects or receives notice that the Services or the use thereof actually or
                                allegedly infringes or violates any third party’s rights or violates any Applicable Laws
                                or (ii) if Pyro determines, in its sole discretion, that any improper activity or
                                potential damage may impact the Services (or any other Pyro product or service).
                            </div>
                            <br></br>
                            <strong>5. Term and Termination</strong>
                            <div>
                                <strong>5.1. Term.</strong> This Agreement will commence on the date you first access or
                                use the Services and continue until terminated as provided herein, or until your access
                                is suspended or terminated by Pyro.
                            </div>
                            <div>
                                <strong>5.2. Termination.</strong> Pyro may terminate this Agreement at any time, with
                                or without cause, and with or without notice.
                            </div>
                            <div>
                                <strong>5.3. Effect of Termination.</strong> Upon termination of this Agreement, your
                                right to access or use the Services will immediately cease, and Pyro will have no
                                obligation to maintain, deliver, or provide access to the Services. All provisions of
                                this Agreement which by their nature should survive termination will survive
                                termination, including, without limitation, warranty disclaimers, indemnity,
                                confidendtiality (as defined in Section 6. Confidentiality), and limitations of
                                liability.
                            </div>
                            <br></br>
                            <strong>6. Confidentiality</strong>
                            <div>
                                <strong>6.1. Confidential Information.</strong> You agree and acknowledge that any and
                                all technical, trade secret, or business information, including, without limitation,
                                financial information, business or marketing strategies or plans, product development or
                                customer information, which is disclosed to you by Pyro or otherwise accessed by you
                                during the term of this Agreement (the “Confidential Information”) is confidential and
                                proprietary, constitutes trade secrets of Pyro, Customer, or a third party who has
                                authorized you to view such Confidential Information, and, as such is of great value and
                                importance to the success of the Pyro or its Customer’s or third party’s partner’s
                                business. 
                            </div>
                            <div>
                                <strong>6.2. Non-Disclosure.</strong> You agree not to disclose any Confidential
                                Information to any third party, and to take all reasonable precautions to protect the
                                confidentiality of the Confidential Information. You agree not to use any Confidential
                                Information for any purpose other than to fulfill your obligations under this Agreement.
                                You agree not to disclose any Confidential Information to any third party, and to take
                                all reasonable precautions to protect the confidentiality of the Confidential
                                Information. You agree not to use any Confidential Information for any purpose other
                                than to fulfill your obligations under this Agreement.
                            </div>
                            <div>
                                <strong>6.3. Exceptions.</strong> Confidential Information does not include information
                                that is (i) publicly known at the time of disclosure or becomes publicly known through
                                no wrongful act or failure of the receiving party, (ii) known to the receiving party at
                                the time of disclosure, (iii) independently developed by the receiving party, or (iv)
                                becomes known to the receiving party from a source other than the disclosing party
                                without breach of this Agreement by the receiving party.
                            </div>
                            <strong>6.4. Obligations</strong>
                            <div>
                                <strong>6.4.1. </strong>
                                You agree to use the same degree of care to protect the Confidential Information as you
                                use to protect your own confidential information of like nature, but in no event less
                                than reasonable care. You agree to immediately notify Pyro of any unauthorized
                                disclosure or use of the Confidential Information, and to assist Pyro in remedying such
                                unauthorized disclosure or use.
                            </div>
                            <br></br>
                            <strong>7. Disclaimers</strong>
                            <div>
                                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND,
                                EXPRESS, IMPLIED, OR STATUATORY. PYRO DISCLAIMS ALL WARRANTIES, INCLUDING WITHOUT
                                LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                                AND NON-INFRINGEMENT. PYRO DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED,
                                AVAILABLE, ERROR-FREE, COMPLETELY SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL
                                COMPONENTS. PYRO DOES NOT WARRANT THAT THE SERVICES WILL MEET ANY PARTICULAR
                                REQUIREMENTS, OR THAT PROGRAM DEFECTS OR ERRORS ARE CAPABLE OF CORRECTION OR
                                IMPROVEMENT. THE SERVICES MAY BE SUBJECT TO LIMITATIONS, DELAYS, AND OTHER PROBLEMS
                                INHERENT IN THE USE OF THE INTERNET AND ELECTRONIC COMMUNICATIONS. PYRO IS NOT
                                RESPONSIBLE FOR ANY DELAYS, DELIVERY FAILURES, OR OTHER DAMAGE RESULTING FROM SUCH
                                PROBLEMS. YOU ACKNOWLEDGE THAT PYRO IS NOT RESPONSIBLE FOR THE ACCURACY OR THE
                                RELIABILITY OF ANY INFORMATION OBTAINED THROUGH THE SERVICES.
                            </div>
                            <div>
                                <strong>8. Representations.</strong> You represent, warrant, and covenant that (i) you
                                will comply with all Applicable Laws with respect to your access to and use of the
                                Services.
                            </div>
                            <br></br>
                            <strong>9. Indemnification and Liability</strong>
                            <div>
                                <strong>9.1. Indemnification.</strong> If instructed by Pyro, you shall be responsible
                                for defending, and in any event, indemnifying and holding Pyro harmless from and against
                                any and all claims, liabilities, damages, losses, and expenses, including without
                                limitation, reasonable attorneys’ fees and costs, arising out of or in any way connected
                                with any of the following: (i) your use of the Services, (ii) your breach or alleged
                                breach of this Agreement, (iii) your violation of any Applicable Laws, or (iv) your
                                violation of any rights of any third party.
                            </div>
                            <div>
                                <strong>9.2. Limitation of Liability.</strong> TO THE MAXIMUM EXTENT PERMITTED BY
                                APPLICABLE LAW, PYRO WILL NOT BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT,
                                INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES OF ANY KIND,
                                INCLUDING WITHOUT LIMITATION ANY LOSS OF USE, LOSS OF DATA, LOSS OF BUSINESS, OR LOSS OF
                                PROFIT OR REVENUE, ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, THE SERVICES,
                                AND ANY OTHER SERVICES RENDERED HEREUNDER (HOWEVER ARISING, INCLUDING NEGLIGENCE), EVEN
                                IF PYRO HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. PYROs TOTAL CUMULATIVE AND
                                AGGREGATE LIABILITY TO YOU WILL NOT EXCEED THE AMOUNTS PAID BY YOU TO PYRO FOR THE
                                SERVICES.
                            </div>
                            <br></br>
                            <strong>10. General Terms</strong>
                            <div>
                                <strong>10.1. Assignment of Agreement.</strong> The Agreement and all rights and
                                obligations hereunder may not be assigned by you without the prior written consent of
                                Pyro, and any attempted assignment without such consent will be void. This Agreement
                                will be binding upon and inure to the benefit of the parties hereto and their respective
                                successors and permitted assigns.
                            </div>
                            <div>
                                <strong>10.2. Force Majeure.</strong> Pyro will not be in default or otherwise liable
                                for any delay in or failure of its performance under this Agreement if such delay or
                                failure arises by any reason beyond its reasonable control, including without
                                limitation, labor disputes, strikes, lockouts, shortages of or inability to obtain
                                energy, raw materials or supplies, denial of service or other malicious attacks,
                                telecommunications failure or degradation, governmental orders and acts (including
                                government-imposed travel restrictions and quarantines), pandemics, material changes in
                                law, war, terrorism, riot, or acts of God.
                            </div>
                            <div>
                                <strong>10.3. Independent Contractors.</strong> You agree and acknowledge that you and
                                Pyro are independent contractors and nothing in this Agreement will be deemed to create
                                any agency, employee-employer relationship, partnership, or joint venture between you
                                and Pyro. You will not have or represent that you have the right, power or authority to
                                bind, contract or commit Pyro or to create any obligation on behalf of Pyro without its
                                express prior written consent. 
                            </div>
                            <div>
                                <strong>10.4. Communications.</strong> Notices to you shall be sent to the address that
                                Pyro has on file with your user account. You agree that Pyro may communicate with you
                                electronically regarding administrative, security, and other issues relating to your use
                                of the Services. Notwithstanding anything to the contrary herein, you agree that any
                                notices, agreements, disclosures or other communications that Pyro sends to you
                                electronically will satisfy any legal communication requirements, including that such
                                communications be in writing.
                            </div>
                            <div>
                                <strong>10.5. Miscellaneous.</strong> If any provision of this Agreement is held by a
                                court of law to be illegal, invalid, or unenforceable, the legality, validity, and
                                enforceability of the remaining provisions of this Agreement will not be affected or
                                impaired thereby and the illegal, invalid, or unenforceable provision will be deemed
                                modified such that it is legal, valid, and enforceable and accomplishes the intention of
                                the parties to the fullest extent possible. The failure of either party to enforce any
                                provision of this Agreement, unless waived in writing by such party, will not constitute
                                a waiver of that party’s right to enforce that provision or any other provision of this
                                Agreement. IN THE EVENT ANY REMEDY HEREUNDER IS DETERMINED TO HAVE FAILED OF ITS
                                ESSENTIAL PURPOSE, ALL LIMITATIONS OF LIABILITY AND EXCLUSIONS OF DAMAGES SET FORTH
                                HEREIN SHALL REMAIN IN EFFECT TO THE MAXIMUM ALLOWED BY APPLICABLE LAW. This Agreement
                                is made and entered into for the sole protection and benefit of the parties hereto, no
                                other person or entity shall be a direct or indirect beneficiary of nor shall have any
                                direct or indirect cause of action or claim in connection with this Agreement. The
                                enumeration herein of specific remedies shall not be exclusive of any other remedies.
                                Any delay or failure by any party to this Agreement to exercise any right, power, remedy
                                or privilege herein contained, or now or hereafter existing under any applicable statute
                                or law, shall not be construed to be a waiver of such right, power, remedy or privilege,
                                nor to limit the exercise of such right, power, remedy, or privilege, nor shall it
                                preclude the further exercise thereof or the exercise of any other right, power, remedy
                                or privilege. This Agreement supersedes all prior discussions, understandings and
                                agreements with respect to its subject matter. This Agreement may only be modified by
                                Pyro as set forth in the fourth paragraph of this Agreement, or by the parties in a
                                writing signed by both parties.
                            </div>
                            <div>
                                <strong>10.5. Severability.</strong> If an arbitrator or court of competent jurisdiction
                                determines that any provision of this Agreement is invalid, illegal, or unenforceable,
                                the remaining provisions of this Agreement will remain in full force will still apply.
                            </div>
                            <div>
                                <strong>10.6. Contact.</strong> The Site and the Services are operated by Pyro. If you
                                have any questions about this Agreement, please email us at support@pyro.host.
                            </div>
                        </article>
                        <h1 className='mt-16 text-[60px] font-extrabold leading-[98%] tracking-[-0.22rem] md:text-[84px] md:tracking-[-0.3rem]'>
                            Acceptable Use Policy
                        </h1>
                        <article className='mt-8 flex flex-col gap-4 leading-[155%]'>
                            <div>
                                We created Pyro to make it easier to host servers for your favorite games. We're
                                committed to making our platform safe, secure, and welcoming, and we need your help to
                                do that. This Acceptable Use Policy ("AUP") outlines common-sense rules that apply to
                                all Pyro users. The AUP is part of the Terms of Service.
                            </div>
                            <div>
                                You may not use our Site or the Services (each as defined in our Terms of Service), or
                                enable anyone else to use the Site or the Services, in a manner that:
                            </div>
                            <ul className='list-disc'>
                                <li>
                                    violates or infringes someone else’s rights of privacy, publicity, copyright,
                                    trademark, or other intellectual property right;
                                </li>
                                <li>bullies, harasses, or intimidates any person or group of people;</li>
                                <li>
                                    defames, abuses, harasses, threatens, or otherwise violates the legal rights of
                                    others;
                                </li>
                                <li>create accounts to access our Services through unauthorized or automated means;</li>
                                <li>
                                    interferes with the integrity or performance of the Site or the Services, whether by
                                    use of malicious code, unauthorized access, the creation of inauthentic accounts, or
                                    otherwise;
                                </li>
                            </ul>
                            <div>You may not use Pyro's Site or Services if you are:</div>
                            <ul className='list-disc'>
                                <li>
                                    a child under the age of 18. Please see our Privacy Policy for more information
                                    regarding children's privacy.
                                </li>
                            </ul>
                            <br></br>
                            <strong>Unlimited Storage Policy</strong>
                            <div>
                                Servers are provided with a baseline amount of storage necessary to run the server. We
                                do not typically limit the amount of storage you can use, but we reserve the right to
                                limit the amount of storage you can use if we determine that your storage usage is
                                excessive. Excessive use of storage is determined by the effect it has on the
                                performance of the server and the average storage usage of other users. Thus, this
                                policy exists as a method of protecting other users, not as a method of explicitly
                                limiting your storage usage.
                            </div>
                            <br></br>
                            <strong>Trial Policy</strong>
                            <div>
                                We offer a 24-hour trial period for all of our paid Minecraft services. If you have
                                previously used a trial period, you are not eligible for another trial period. We
                                reserve the right to limit the number of trial periods you can use if we determine that
                                you are abusing the trial period system.
                            </div>
                            <br></br>
                            <strong>Refunds and Cancellations</strong>
                            <div>
                                We offer a 24-hour refund period for all of our paid services. You may email us at
                                support@pyro.host, or create a ticket within the Discord server (accessible via the
                                management panel) to request a refund. We reserve the right to limit the number of
                                refunds you can request if we determine that you are abusing the refund system or if we
                                determine that you are not using the Services in good faith. You can also cancel your
                                services via the same methods.
                            </div>
                            <br></br>
                            <strong>Promotions Policy</strong>
                            <div>
                                We may offer promotions from time to time. We reserve the right to limit the number of
                                promotions you can use. Pyro cannot guarantee that promotions will be available at any
                                given time.
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
