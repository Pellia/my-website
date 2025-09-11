const LegalNotice = () => {
    return (
        <main className="container mx-auto my-24 px-6">
            <div className="bg-background-secondary border-border mx-auto rounded-md border-1 p-6 md:w-[70%]">
                <h2 className="font-inter-extrabold text-2xl">Legal Notice</h2>
                <section className="mt-2 mb-6">
                    <h3 className="text-md font-inter-medium">Rupinder Singh</h3>
                    <address className="text-sm not-italic">
                        Email:{" "}
                        <a href="mailto:contact.singh.rupinder@gmail.com" className="underline">
                            contact.singh.rupinder@gmail.com
                        </a>
                    </address>
                </section>
                <section className="mb-6">
                    <p className="text-sm">
                        <strong>Responsible for the content according to § 55 Abs. 2 RStV:</strong>
                        <br /> Rupinder Singh
                    </p>
                </section>
                <section>
                    <h3 className="font-inter-semibold mb-2 text-xl">Disclaimer</h3>
                    <article className="mb-6">
                        <h4 className="text-md">Liability for Content</h4>
                        <p className="mt-2 text-sm leading-relaxed">
                            The contents of our pages were created with care. However, we can not assume any liability for the accuracy, completeness and timeliness of the content. As a service
                            provider we are responsible according to § 7 Abs.1 TMG for our own contents on these pages according to the general laws. According to §§ 8 to 10 TMG, however, we as a
                            service provider are not obliged to monitor transmitted or stored external information or to investigate circumstances that indicate illegal activity. Obligations to remove
                            or block the use of information under general law remain unaffected. A liability in this regard, however, is only possible from the date of knowledge of a specific
                            infringement. Upon notification of appropriate violations, we will remove this content immediately.
                        </p>
                    </article>
                    <article className="mb-6">
                        <h4 className="text-md">Liability for Links</h4>
                        <p className="mt-2 text-sm leading-relaxed">
                            Our offer contains links to external websites of third parties on whose contents we have no influence. Therefore, we can not assume any liability for these external
                            contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal
                            violations at the time of linking. Illegal content was not recognizable at the time of linking. However, a permanent content control of the linked pages is not reasonable
                            without concrete evidence of an infringement. Upon notification of violations, we will remove such links immediately.
                        </p>
                    </article>
                    <article className="mb-6">
                        <h4 className="text-md">Copyright</h4>
                        <p className="mt-2 text-sm leading-relaxed">
                            The content and works on these pages created by the site operators are subject to German copyright law. The reproduction, processing, distribution and any kind of
                            exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are for private,
                            non-commercial use only. As far as the contents on this side were not created by the operator, the copyrights of third parties are considered. In particular contents of
                            third parties are marked as such. If you should still be aware of a copyright infringement, we ask for a note. Upon notification of violations, we will remove such content
                            immediately.
                        </p>
                    </article>
                </section>
                <p className="text-secondary mt-6 text-xs">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
        </main>
    );
};

export default LegalNotice;
