import { minDaysNewLabel } from "@/app/utils/constants";
import { useLocale } from "next-intl";

export const useDate = () => {
    const locale = useLocale()

    const getDateFromString = (dateString: string): Date => new Date(Date.parse(String(dateString)))

    const secondsBetweenDates = (startDate: Date, endDate: Date) => endDate.getTime() - startDate.getTime()

    const getDateString = (dateString: string): string => {
        const options: Intl.DateTimeFormatOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return getDateFromString(dateString).toLocaleDateString(locale, options)
    }

    const isShowedNew = (dateString: string): boolean => {
        const secondsBetween = secondsBetweenDates(getDateFromString(dateString), new Date())
        const daysBetween = secondsBetween / (1000 * 3600 * 24)
        return minDaysNewLabel > daysBetween
    }

    const isShowedPost = (dateString: string): boolean => getDateFromString(dateString).getTime() <= new Date().getTime()

    return {getDateString, isShowedNew, isShowedPost}
}

export default useDate