import * as dayjs from 'dayjs';

export function formatarData(data: string): string | null {
    const regex = /^(\d{2})(\d{2})(\d{4})$/;
    const match = data.match(regex);
    if (!match) return null;

    const [_, dia, mes, ano] = match;
    const dataFormatada = dayjs(`${ano}-${mes}-${dia}`, 'YYYY-MM-DD');
    return dataFormatada.isValid() ? dataFormatada.format('DD/MM/YYYY') : null;
}

export function formatarDataHora(dataHora: string): string | null {
    const regex = /^(\d{2})(\d{2})(\d{4})(\d{2})(\d{2})$/;
    const match = dataHora.match(regex);
    if (!match) return null;

    const [_, dia, mes, ano, hora, minuto] = match;
    const dataHoraFormatada = dayjs(`${ano}-${mes}-${dia} ${hora}:${minuto}`, 'YYYY-MM-DD HH:mm');
    return dataHoraFormatada.isValid() ? dataHoraFormatada.format('DD/MM/YYYY HH:mm') : null;
}
