class EventsController < ApplicationController

  def index
    @events = Event.all
    if params[:topics] || params[:times] || params[:days] || params[:frequencies]
      @events = Event.tagged_with(params[:topics]||params[:times] || params[:days] ||params[:frequencies], :any => true)
    end

    @topics = ActsAsTaggableOn::Tagging.where(context: 'topics').map { |tagging| tagging.tag.name }.uniq
    @days = ActsAsTaggableOn::Tagging.where(context: 'days').map { |tagging| tagging.tag.name }.uniq
    @times = ActsAsTaggableOn::Tagging.where(context: 'times').map { |tagging| tagging.tag.name }.uniq
    @frequencies = ActsAsTaggableOn::Tagging.where(context: 'frequencies').map { |tagging| tagging.tag.name }.uniq

    respond_to do |format|
      format.html  # index.html.erb
      format.json  { render :json => @events }
      format.rss { render :layout => false }
    end
  end

  def show
    @event = Event.find(params[:id])

    respond_to do |format|
      format.html  # show.html.erb
      format.json  { render :json => @event }
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:name, :id, :topic_list, :time_list, :day_list, :frequency_list)
    end
end
