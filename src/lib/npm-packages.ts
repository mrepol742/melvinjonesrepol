const NPM_SEARCH_URL =
  "https://registry.npmjs.org/-/v1/search?text=maintainer:mrepol742&size=250";

export interface NpmPackage {
  name: string;
  version: string;
  description?: string;
  keywords: string[];
  license?: string;
  date: string;
  links: {
    npm: string;
    homepage?: string;
    repository?: string;
  };
}

export interface NpmPackageSearchObject {
  downloads: {
    monthly: number;
    weekly: number;
  };
  dependents: number | string;
  package: NpmPackage;
}

export interface NpmPackageSearchResponse {
  objects: NpmPackageSearchObject[];
  total: number;
  time: string;
  last_fetched: string;
}

export async function fetchNpmPackages(): Promise<NpmPackageSearchResponse | null> {
  try {
    const response = await fetch(NPM_SEARCH_URL, {
      next: { revalidate: 10800 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch NPM packages: ${response.statusText}`);
    }

    const data = (await response.json()) as Omit<
      NpmPackageSearchResponse,
      "last_fetched"
    >;

    return {
      ...data,
      last_fetched: new Date().toUTCString(),
    };
  } catch (error) {
    console.error("Failed to fetch NPM packages", error);
    return null;
  }
}
