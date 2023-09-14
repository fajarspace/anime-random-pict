import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";

function CringeDisplay() {
  const [imageURL, setImageURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://api.waifu.pics/sfw/cringe", {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error(`Error! status: ${res.status}`);
      }

      const json = await res.json();
      setImageURL(json.url);
    } catch (err) {
      console.error(err.message);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                        <a href="#" onClick={fetchData}>
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

export default CringeDisplay;
