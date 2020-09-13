const domainType = (domains: string[]): string[] => {
  let result: string[] = [];
  let domainSplit: string[][] = [];

  domains.forEach((domain) => {
    domainSplit.push(domain.split("."));
  });

  for (let i = 0; i < domainSplit.length; i++) {
    const domainEnd: string = domainSplit[i][domainSplit[i].length - 1]

    if (domainEnd == "org") {
      result.push("organization");
    }

    if (domainEnd == "com") {
      result.push("commercial");
    }

    if (domainEnd == "net") {
      result.push("network");
    }

    if (domainEnd == "info") {
      result.push("information");
    }
  }

  return result;
};

// Test
console.log(
  domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"])
); // ["organization", "commercial", "network", "information"]
