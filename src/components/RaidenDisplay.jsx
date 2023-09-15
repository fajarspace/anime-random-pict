import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";

function RaidenDisplay() {
  const [imageURL, setImageURL] = useState("");
  const [imageType, setImageType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.waifu.im/search?included_tags=raiden-shogun`,
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

export default RaidenDisplay;
