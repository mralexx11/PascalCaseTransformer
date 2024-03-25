class PascalCaseTransformer {
  transform(data: Record<string, any>): Record<string, any> {
    const transformedData: Record<string, any> = {};
    Object.keys(data).forEach((key) => {
      const transformedKey = this.convertToPascalCase(key);
      transformedData[transformedKey] = data[key];
    });
    return transformedData;
  }

  private convertToPascalCase(str: string): string {
    return str.replace(/_([a-z])/g, (_, match) => match.toUpperCase());
  }
}

// Example usage:
const data = {
  first_name: "Oleksii",
  last_name: "Okhrimenko",
};

const transformer = new PascalCaseTransformer();
const transformedData = transformer.transform(data);

console.log(transformedData);
