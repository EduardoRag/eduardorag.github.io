const downloadResume = (): void => {
    const link = document.createElement('a');
    link.href = '/luiz-eduardo-jarek-fullstack.pdf';
    link.download = 'luiz-eduardo-jarek-fullstack.pdf';
    link.click();
}

export default downloadResume;