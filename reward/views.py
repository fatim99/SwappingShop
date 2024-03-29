
from django.core.cache import cache
from django.shortcuts import get_object_or_404, redirect, render
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from datetime import datetime
from .models import Coupon
from account.models import customer


def redeem(request):
    if request.session.get('email') == None :
        return redirect('signup')
    coupons = Coupon.objects.all()
    return render(request, 'reward_app/redeem.html', {'coupons': coupons})

@login_required
def redeem_coupon(request, coupon_id):
    coupon = get_object_or_404(Coupon, pk=coupon_id)
    try:
        user_profile = customer.objects.get(userName=request.user.username)
    except customer.DoesNotExist:
        messages.error(request, 'User profile not found')
        return redirect('signup')
""""sugessted business logic 
    if coupon.expiration_date < datetime.now().date():
        messages.error(request, 'Coupon has expired')
    elif user_profile.points < coupon.needed_points:
        messages.error(request, 'You do not have enough points to redeem this coupon')
    else:
        user_profile.points -= coupon.needed_points
        user_profile.save()
        coupon_code = coupon.unique_code
        messages.success(request, f'Congratulations! You have redeemed the coupon from {coupon.sponsor_name}. Here is your unique code: {coupon_code}')
    
    return redirect('reward:redeem')
"""


def leaderboard(request):
    if request.session.get('email')== None:
        return redirect('signup')
    customers = cache.get('leaderboard')
    if customers is None:
        customers = customer.objects.order_by('-points')[:10]
        cache.set('leaderboard', customers, 120) # cache for 2 minutes
    return render(request, 'reward_app/leaderboard.html', {'customers': customers})



