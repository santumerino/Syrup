import { ScrollArea } from "@/components/ui/scroll-area";
import CouponCard, { Coupon } from "./CouponCard";

const CouponsList: React.FC<{
    coupons: Coupon[] | null;
    handleCopy: (code: string, index: number) => void;
}> = ({ coupons, handleCopy }) => (
    <ScrollArea className="flex-1">
        {coupons ? (
            coupons.length > 0 ? (
                <div className="space-y-2">
                    {coupons.map((coupon, index) => (
                        <CouponCard
                            key={index}
                            coupon={coupon}
                            onCopy={() => handleCopy(coupon.code, index)}
                            copied={(coupon as Coupon).copied || false}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-sm text-muted-foreground">
                    No coupons available for this site.
                </p>
            )
        ) : (
            <p className="text-sm text-muted-foreground">
                Loading coupons for this site...
            </p>
        )}
    </ScrollArea>
);

export default CouponsList;
