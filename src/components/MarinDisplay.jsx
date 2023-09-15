import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";

function MarinDisplay() {
  const [imageURL, setImageURL] = useState("");
  const [imageType, setImageType] = useState("");
  const [showGIFs, setShowGIFs] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.waifu.im/search?included_tags=marin-kitagawa`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Accept-Version": "v5",
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Error! status: ${res.status}`);
      }

      const data = await res.json();
      setImageURL(data.images[0].url);
    } catch (err) {
      console.error(err.message);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [imageType]);

  const includeGIFs = () => {
    setShowGIFs(true);
    fetchData();
  };

  const excludeGIFs = () => {
    setShowGIFs(false); // Perbaikan disini
    fetchData();
  };

  return (
    <>
      <Layout>
        <section>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {isError ? (
                <p>An error occurred while fetching waifu.</p>
              ) : (
                <>
                  {imageURL && (
                    <div>
                      <img width="100%" src={imageURL} alt="Generated Waifu" />
                      <p>
                        <a
                          href={imageURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Full Image
                        </a>
                      </p>
                      <p>
                        <a type="raiden-shogun" href="#" onClick={fetchData}>
                          Refresh
                        </a>
                      </p>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </section>
      </Layout>
    </>
  );
}

export default MarinDisplay;
