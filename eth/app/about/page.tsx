import "./about.css";

export default function About() {
  return (
    <article className="min-h-screen w-full">
      <div className="p-4 text-center text-3xl font-bold text-white">About</div>
      <div className="p-8 ">
        <h2 className="py-3">
          Art.io is an innovative art and NFT investment platform designed to
          support artists and transform the way we appreciate and invest in art.
          Built on the principles of decentralization, transparency, and
          inclusivity, Art.io aims to bridge the gap between artists and
          investors. At its core, Art.io serves as a vibrant marketplace where
          artists can:
        </h2>
        <ul>
          <li className="points">
            showcase and monetize their creative works as non-fungible tokens
            (NFTs)
          </li>
          <li className="points">
            share a diverse range of artistic expressions for investors to
            discover, including painting, sculpture, photography, digital art,
            and more
          </li>
          <li className="points">
            enjoy an unparalleled level of control and ownership over their
            creations
          </li>
          <li className="points">
            mint their artworks as NFTs, protecting their intellectual property
            rights, ensuring authenticity, and receiving fair compensation for
            their talent
          </li>
          <li className="points">
            take charge of their artistic journey and reach a global audience
            through Art.io's robust tools and resources
          </li>
        </ul>
        <h2 className="py-3">Investors on Art.io can:</h2>
        <ul>
          <li className="points">
            participate in the art market and support talented artists
          </li>
          <li className="points">
            gain ownership of unique digital assets that represent a piece of
            art and its associated value through NFTs
          </li>
        </ul>
        <h2 className="py-3">
          Art.io is committed to making art and NFT investment accessible to
          all. Through user-friendly interfaces and intuitive features, the
          platform welcomes art enthusiasts, seasoned collectors, and first-time
          investors alike. Art.io's mission is to break down barriers, promote
          diversity and inclusion, and empower artists from all backgrounds to
          thrive in the digital age. In a rapidly evolving art landscape, Art.io
          emerges as a trailblazer, revolutionizing the art market and fostering
          a symbiotic relationship between artists and investors. By combining
          cutting-edge technology, community engagement, and a dedication to
          supporting artists, Art.io paves the way for a new era of creativity,
          appreciation, and investment in the world of art.
        </h2>
      </div>
    </article>
  );
}
