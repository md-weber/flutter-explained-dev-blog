/** @jsx jsx */
import {jsx, Link} from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

const Footer = () => {
    const {siteTitle} = useSiteMetadata()

    return (
        <footer
            sx={{
                boxSizing: `border-box`,
                display: `flex`,
                justifyContent: `space-between`,
                mt: [6],
                color: `secondary`,
                a: {
                    variant: `links.secondary`,
                },
                flexDirection: [`column`, `column`, `row`],
                variant: `dividers.top`,
            }}
        >
            <div>
                &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
            </div>
            <div>
                <Link
                    aria-label="Link to the Privacy Policy"
                    href="./privacy-policy"
                >
                    Privacy Policy
                </Link>
                {` - `}
                <Link
                    aria-label="Link to the Impressum"
                    href="./impressum"
                >
                    Impressum
                </Link>
                {` `}

            </div>
        </footer>
    )
}

export default Footer
