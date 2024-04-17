/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pyro Source Available License',
    description: 'Pyro Source Available License',
    openGraph: {
        title: 'Pyro Source Available License',
        description: 'Pyro Source Available License',
        images: [
            {
                url: './ogimage.png',
            },
        ],
    },
};

const Page = () => {
    return (
        <main className='relative h-full w-full'>
            <section className='relative h-full w-full px-16'>
                <div className='mx-auto flex w-full max-w-[1620px] flex-col'>
                    <div className='z-10 mx-auto flex w-full max-w-[60ch] flex-col pt-60'>
                        <h1 className='mt-4 text-[60px] font-extrabold leading-[98%] tracking-[-0.22rem] md:text-[84px] md:tracking-[-0.3rem]'>
                            Pyro Source Available License
                        </h1>
                        <article className='mt-6'>
                            <p>
                                This Software License Agreement (this &quot;
                                <strong>License</strong>&quot;) is a legal contract between You and Pyro Inc. (&quot;
                                <strong>Pyro</strong>&quot;).
                            </p>
                            <h2 className='psal-h2' id='1-definitions'>
                                1. Definitions
                            </h2>
                            <ol>
                                <li className='psal-li'>
                                    <strong>Software</strong> means all copies of the original or modified software, and
                                    all derivative software licensed under this License.
                                </li>
                                <li className='psal-li'>
                                    <strong>You</strong> or <strong>Your</strong> means the individual or entity that
                                    exercises the rights granted under this License.
                                </li>
                                <li className='psal-li'>
                                    <strong>Personal Use</strong> means use of the Software for internal purposes only,
                                    such as for learning, hobbies, or personal projects excluding any use that could
                                    directly or indirectly support a commercial enterprise.
                                </li>
                                <li className='psal-li'>
                                    <strong>Commercial Use</strong> means using the Software to create products or
                                    services intended for sale, distribution for profit, or to gain a competitive
                                    advantage.
                                </li>
                            </ol>
                            <h2 className='psal-h2' id='2-grant-of-rights'>
                                2. Grant of Rights
                            </h2>
                            <ol>
                                <li className='psal-li'>
                                    Pyro grants You the right to use the Software for Personal Use only.
                                </li>
                                <li className='psal-li'>
                                    Pyro grants You the right to use, modify, and distribute the Software for Personal
                                    Use only.
                                </li>
                            </ol>
                            <h2 className='psal-h2' id='3-restrictions'>
                                3. Restrictions
                            </h2>
                            <ol>
                                <li className='psal-li'>
                                    Pyro reserves all rights not expressly granted to You in this License.
                                </li>
                                <li className='psal-li'>
                                    You may not use the Software for Commercial Use without obtaining a separate
                                    commercial license from Pyro.
                                </li>
                                <li className='psal-li'>
                                    You may not sublicense, rent, lease, sell, distribute, or otherwise commercialize
                                    the Software or any derivative works thereof without obtaining a separate commercial
                                    license from Pyro.
                                </li>
                                <li className='psal-li'>
                                    You must conspicuously display this License on each original or modified copy of the
                                    Software. If You receive the Software in original or modified form from a third
                                    party, the terms and conditions set forth in this License apply to Your use of that
                                    work.
                                </li>
                            </ol>
                            <h2 className='psal-h2' id='4-disclaimers'>
                                4. Disclaimers
                            </h2>
                            <ol>
                                <li className='psal-li'>
                                    <p>
                                        THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND,
                                        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                                        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
                                        EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
                                        OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                        FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                        THE SOFTWARE.
                                    </p>
                                </li>
                                <li className='psal-li'>
                                    <p>
                                        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
                                        DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
                                        ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
                                        DEALINGS IN THE SOFTWARE.
                                    </p>
                                </li>
                            </ol>
                            <h2 className='psal-h2' id='5-termination'>
                                5. Termination
                            </h2>
                            <p>
                                This License is effective until terminated. Your rights under this License will
                                terminate automatically without notice from Pyro if You fail to comply with any term(s)
                                of this License. Upon termination of this License, You shall cease all use of the
                                Software and destroy all copies, full or partial, of the Software.
                            </p>
                            <h2 className='psal-h2' id='6-governing-law'>
                                6. Governing Law
                            </h2>
                            <p>
                                This License is governed by the laws of the State of Delaware, United States. Any
                                dispute arising under this License shall be heard solely by a state or federal court in
                                the State of Delaware, and the parties hereby waive any objection to the jurisdiction of
                                these courts over the parties.
                            </p>
                            <h2 className='psal-h2' id='7-entire-agreement'>
                                7. Entire Agreement
                            </h2>
                            <p>
                                This License constitutes the entire agreement between the parties concerning the
                                Software and supersedes all prior or contemporaneous communications, agreements, and
                                understandings, whether oral or written, between the parties relating to the Software.
                            </p>
                            <h2 className='psal-h2' id='8-modifications'>
                                8. Modifications
                            </h2>
                            <p>
                                Pyro reserves the right to modify this License at any time. Modifications to this
                                License will be effective immediately upon posting. Your continued use of the Software
                                after any modifications to this License will constitute Your acceptance of such
                                modifications.
                            </p>
                            <h2 className='psal-h2' id='9-acceptance'>
                                9. Acceptance
                            </h2>
                            <p>
                                By using the Software, You acknowledge that You have read, understood, and agree to be
                                bound by the terms of this License. If You do not agree to the terms of this License,
                                You are prohibited from using the Software.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;
