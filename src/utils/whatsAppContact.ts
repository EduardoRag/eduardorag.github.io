const whatsAppContact = (): void => {
    const link = document.createElement('a');
    const mensagem = 'Olá, tudo bem?'
    link.href = `https://wa.me/5541992832149?text=${mensagem}`;
    link.target = '_blank'
    link.click();
}

export default whatsAppContact;